import { faker } from '@faker-js/faker';
import { type Request, type Response } from 'express';

type ItemType = Record<'title' | 'date' | 'description' | 'image', string> &
  Record<'priority', 'low' | 'moderate' | 'extreme'>;

export default function Todo(req: Request, res: Response) {
  const count = parseInt((req.query.count as string) ?? 10);
  const items: Array<ItemType> = Array.from({ length: count }, () => ({
    title: faker.lorem.text(),
    description: faker.lorem.paragraphs(),
    image: faker.image.urlPicsumPhotos({ grayscale: false, blur: 0 }),
    date: faker.date.anytime().toISOString(),
    priority: (['low', 'extreme', 'moderate'] as ItemType['priority'][])[
      Math.floor(Math.random() * 3)
    ],
  }));

  res.json({
    items,
  });
}
