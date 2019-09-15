import React, { Component } from "react";
import "./Main.css"
class Main extends Component {
    render() {
        return (
            <div className="main mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8  mb-4 mb-md-0">
                            <table className="mx-auto">
                                <thead>
                                    <tr>
                                        <th>Aluno</th>
                                        <th>Turma</th>
                                        <th>Grau</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                               
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 col-md-4">
                            <form className="mx-auto">
                                <label className="mb-2"> Aluno:</label>
                                <input type="text" className="form-control mb-2 w-100" id="" placeholder="Nome do aluno" />
                                <label className="mb-2"> Turma:</label>
                                <select className="form-control mb-2">
                                    <option value=""></option>
                                </select>
                                <label className="mb-2"> Grau:</label>
                                <select className="form-control mb-2">
                                    <option value="">Anos iniciais</option>
                                    <option value="">Ensino fundamental</option>
                                    <option value="">Ensino Médio</option>
                                </select>
                                <button className="btn p-2 btn-success px-2">Salvar</button>
                                <button className="btn p-2 btn-warning ml-2 px-2">Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main