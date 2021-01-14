export interface Book {
  id: number;
  author: string;
  title: string;
  genre?: string;
  publisher?: string;
  year?: string;
  image: {
    url: string | null;
  };
}
