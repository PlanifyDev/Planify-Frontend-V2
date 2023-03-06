import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {

          setSession(accessToken);

          // const response = await axios.get('/api/account/my-account');
          // const { user } = response.data;
          const user = JSON.parse(window.localStorage.getItem('user'));
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:3000/signin', {
      email,
      password,
    });
    const { jwt, user } = response.data;
    const accessToken = jwt;
    setSession(accessToken);
    window.localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const register = async (email, password, firstname, lastname) => {
    console.log({
      firstname,
      lastname,
      email,
      password
    });
    const response = await axios.post('http://localhost:3000/signup', {
      email,
      password,
      firstname,
      lastname,
    });
    const { jwt, user } = response.data;
    const accessToken = jwt;
    setSession(accessToken);
    console.log(response);
    window.localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken ) {
      const uid = jwtDecode(accessToken).userId;
      const response = await axios.get(`http://localhost:3000/signout/${uid}`);
    }
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
