export interface Empresa {
  id?: number;
  solicitante: {
    ds_responsavel: string;
    nu_cpf: string;
    date_nascimento: string;
  };
  empresa: {
    ds_nome_fantasia: string;
    co_entidade_registro: number | null;
    co_natureza_juridica: number | null;
    endereco: {
      co_cep: number | null;
      ds_logradouro: string;
      co_numero: string;
      ds_complemento: string | null;
      ds_bairro: string;
      ds_municipio: string;
      co_uf: string;
    };
  };
}

export interface EntidadeRegistro {
  key: number;
  value: string;
  id?: string;
}

export interface Dados {
  empresas: Empresa[];
  entidadeRegistro: EntidadeRegistro[];
}
