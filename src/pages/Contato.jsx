import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Contato = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function enviarFeedback(data) {
        console.log(data); // Aqui você pode processar os dados, como enviar para um servidor, por exemplo.
        console.log("Feedback enviado!");
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(enviarFeedback)}>
                <h1>Entre em contato</h1>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", { required: "O nome é obrigatório!" })}
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
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido!"
                            }
                        })}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        id="feedback"
                        className="form-control"
                        {...register("feedback", { required: "O feedback é obrigatório!" })}
                    ></textarea>
                    {errors.feedback && <small className="invalid">{errors.feedback.message}</small>}
                </div>
                <Button variant="outline-dark" className="w-100 mt-1" type="submit">
                    Enviar Feedback
                </Button>
            </form>
        </main>

    );
}

export default Contato;