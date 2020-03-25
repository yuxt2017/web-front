import http from '@/utils/http';

const RegisterService = {
    register(data: any, config: any) {
        return http.post('/x/x', data, config);
    },
};

export default RegisterService;
