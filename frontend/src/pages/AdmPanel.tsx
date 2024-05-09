import { useState } from "react";
import "../styles/admPanel.css";

export default function AdmPanel(){
    
    const [name, setName] = useState("Gustavo");
    
    return(
        <div className="container-cards-adm">
            <h1>Seja bem vindo {name}!</h1>
            <div className="cards">
                <div className="card-1">
                    <div>
                        <p>Painel de projetos</p>
                        <p>Acesse seus projetos</p>
                        <button>Acessar</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="card-2">
                    <div>
                        <p>Painel de usuários</p>
                        <p>Crie ou edite usuários.</p>
                        <button>Acessar</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}