import { useState } from "react";

export default function App() {
    const [form, setForm] = useState({
        nome: "", telefone: "", endereco: "",
    });

    const [mensagem, setMensagem] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function verificarCampos(e) {
        e.preventDefault();

        const erros = [];

        if (!form.nome.trim()) erros.push("Digite o nome");
        if (!form.telefone.trim()) erros.push("Digite o telefone");
        if (!form.endereco.trim()) erros.push("Digite o endereço");

        if (erros.length > 0) {
            setMensagem(erros.join(" | "));
            return;
        }
        setMensagem("✅ Formulário enviado com sucesso!");
    }
    return (
        <div>
            <form onSubmit={verificarCampos}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    value={form.endereco}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </form>

            {mensagem && <p>{mensagem}</p>}

        </div>
    );
}