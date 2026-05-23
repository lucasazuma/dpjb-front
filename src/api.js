import axiosConfig from "./config";

// Export axiosConfig as default 'api' for backward compatibility
export default axiosConfig;

class APIResource {
  static resource = "/";

  static async all({ params = {}, sendHeaders = false } = {}) {
    const response = await axiosConfig.get(this.resource, { params });
    if (sendHeaders) {
      return { data: response.data, headers: response.headers };
    }
    return response.data;
  }

  static async find(id) {
    const response = await axiosConfig.get(`${this.resource}/${id}`);
    return response.data;
  }

  static async create(data) {
    const response = await axiosConfig.post(this.resource, data);
    return response.data;
  }

  static async update(id, data) {
    const response = await axiosConfig.patch(`${this.resource}/${id}`, data);
    return response.data;
  }

  static async delete(id) {
    const response = await axiosConfig.delete(`${this.resource}/${id}`);
    return response.data;
  }
}

export class Journalists extends APIResource {
  static resource = "/api/orjp";

  static async getByCpf(cpf) {
    const response = await axiosConfig.get(`${this.resource}/getJournalistByCpf/${cpf}`);
    return response.data;
  }

  static async get(id) {
    const response = await axiosConfig.get(`${this.resource}/getJournalist/${id}`);
    return response.data;
  }

  static async createJournalist(data) {
    const response = await axiosConfig.post(`${this.resource}/createJournalist`, data);
    return response.data;
  }
}

export class Proposals extends APIResource {
  static resource = "/api/internal";

  static async getProposal(id) {
    const response = await axiosConfig.get(`${this.resource}/getProposal/${id}`);
    return response.data;
  }

  static async getProposalByCpf(cpf) {
    const response = await axiosConfig.get(`${this.resource}/getProposalByCpf/${cpf}`);
    return response.data;
  }

  static async getAllProposals(username) {
    const response = await axiosConfig.get(`${this.resource}/getAllProposals/${username}`);
    return response.data;
  }

  static async createProposal(data) {
    const response = await axiosConfig.post(`${this.resource}/createProposal`, data);
    return response.data;
  }

  static async approveProposal(data) {
    const response = await axiosConfig.post(`${this.resource}/approveProposal`, data);
    return response.data;
  }

  static async deleteProposal(data) {
    const response = await axiosConfig.post(`${this.resource}/deleteProposal`, data);
    return response.data;
  }
}

export class UpdateProposals extends APIResource {
  static resource = "/api/updates";

  static async getUpdateProposals() {
    const response = await axiosConfig.get(`${this.resource}/getUpdateProposals`);
    return response.data;
  }
}

export class Auth extends APIResource {
  static resource = "/api/orjp";

  static async login(username, password) {
    const response = await axiosConfig.post(`${this.resource}/loginJournalist`, { username, password });
    return response.data;
  }
}
