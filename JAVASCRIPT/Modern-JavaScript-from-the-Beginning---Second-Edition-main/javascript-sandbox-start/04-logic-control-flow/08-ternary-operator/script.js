
const auth = true;
const redirect = auth ? (alert('Welcome to dashboard'), '/dashbord') : (alert('Login failed'), '/login');