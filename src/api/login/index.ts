import http from '@/utils/http';

const LoginService = {
    login(data: any, config: any = null) {
        return http.post('/smartcity/auth/getToken', data, config);
    },
};

export default LoginService;
