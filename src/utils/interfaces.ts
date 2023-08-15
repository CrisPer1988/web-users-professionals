
export interface Professional {
    id: number;
    name: string;
    number_tel: string
    email: string;
    categories: {
        id: number;
        name_category: string;
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