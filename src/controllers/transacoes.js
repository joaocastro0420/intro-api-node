const db = require('../dataBase/connection');

module.exports = {
    async listarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'lista de transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    },
    async cadastrarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'cadastro de transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    },
      async editarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'atualização de transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    }, 
      async apagarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'apagar transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    }
 
}