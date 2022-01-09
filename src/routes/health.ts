import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
   res.json({ app: 'up and running...' })
});

export default router;
