import { getArticles } from 'src/services';

export async function getTitles() {
  const articles = await getArticles();
  return articles.map((article) => {
    return {
      id: article.id,
      title: article.title,
    };
  });
}
