
export interface Professional {
    id: number;
    name: string;
    number_tel: string
    email: string,
    cat_name:string;
    categories: {
        id: number;
        name_category: string;
        professional_id: number
    }[];
    jobs: {
      id: number;
      work_name: string;
      imageUrl: string;
      description: string;
    }[];
    reviews: {
        id: number;
        comment: string;
        rating: number;
        professional_id: number;
        user_id: number;
    };
    
  }

  export interface DataRegisterUser {
    name: string,
    email: string,
    password: string,
}

export interface DataLoginUser {
  email: string,
  password: string,
}

export interface ReviewInterface {
  comment: string,
  rating: number
}