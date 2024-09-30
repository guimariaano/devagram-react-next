import HttpService from "./HttpService";


export default class UsuarioService extends HttpService {
    async login(credenciais) {
        await this.post('/login', credenciais);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        const usuario = await this.get('/usuario');
        localStorage.setItem('id', usuario.data._id);

        if (usuario.data.avatar) {
            localStorage.setItem("avatar", usuario.data.avatar);
        }
    }

    async cadastro(dados) {
        return this.post('/cadastro', dados)

    }

}