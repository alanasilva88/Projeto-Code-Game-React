import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";



const Cadastro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleCadastro(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(handleCadastro)}>
                <h1>Cadastro</h1>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        className="form-control"
                        {...register("nome", {
                            required: "O nome é obrigatório!",
                            minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres!" }
                        })}
                    />
                    {errors.nome && <small className="invalid">{errors.nome.message}</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        {...register("email", {
                            required: "O email é obrigatório!",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email inválido!"
                            }
                        })}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input 
                        type="date" 
                        id="dataNascimento" 
                        className="form-control"
                        {...register("dataNascimento", { required: "A data de nascimento é obrigatória!" })}
                    />
                    {errors.dataNascimento && <small className="invalid">{errors.dataNascimento.message}</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        className="form-control"
                        {...register("senha", {
                            required: "A senha é obrigatória!",
                            minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres!" }
                        })}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
                <Button variant="outline-dark" className="w-100 mt-3" type="submit">
                    Cadastrar
                </Button>
            </form>
        </main>
    );
}

export default Cadastro;