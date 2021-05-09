interface Entity {
  [key: string]: any;
}

export interface TemplateEntity extends Entity {
  avatar: string;
  description: string;
}

type ResponseHandler = (response: Response) => Response;

export const fromJson = <T extends Entity>(response: Response): Promise<T> => response.json() as Promise<T>;

export const statusCheck = (from = 200, to?: number): ResponseHandler => {
  return (response: Response): Response => {
    const errorMessage = `Invalid response status: ${response.status}. Must be ${
      to ? 'between ' + from + ' and ' + to : from
    }.`;
    if (response.status < from) {
      throw new Error(errorMessage);
    }
    if (to && response.status > to) {
      throw new Error(errorMessage);
    }
    return response;
  };
};

export const fetchData = <T extends Entity>(url: string): Promise<T[]> => {
  return fetch(url).then(statusCheck(200)).then(fromJson) as Promise<T[]>;
};
