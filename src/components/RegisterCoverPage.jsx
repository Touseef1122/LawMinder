import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
// import { Page, Logo, Authwithsocial, Authcarousel, Registerform } from '../../src/components';
// import { Scrollbar } from '../../src/components';
// import Routes from '../../src/routes';
import Login from './Login';
const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  height: '100vh',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 2.5),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '50%',
    padding: theme.spacing(2, 4),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%',
    padding: theme.spacing(1, 10),
  },
}));

const ScrollStyle = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  padding: theme.spacing(1.5),
}));

const RegisterCoverPage = () => {
  return (
    <Page title="Register Cover">
      <RootStyle>
        <ContentStyle>
          <Scrollbar>
            <ScrollStyle>
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" paragraph>
                  Sign Up
                </Typography>
              </div>
              <Login />
              <Typography variant="body2" mt={0.5} style={{ color: 'text.secondary' }}>
                Already have an account?{' '}
                <Link to={Routes.AUTH_LOGIN_COVER} variant="subtitle2" color="#CE9A00">
                  Login
                </Link>
              </Typography>

              <Divider sx={{ py: 1 }}>
                <Typography variant="body2" style={{ color: 'text.disabled' }}>
                  OR
                </Typography>
              </Divider>
            </ScrollStyle>
          </Scrollbar>
        </ContentStyle>

      </RootStyle>
    </Page>
  );
};

export default RegisterCoverPage;
