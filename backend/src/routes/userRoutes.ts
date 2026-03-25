import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '#controllers';
import { validateBody, fileUploadHandler } from '#middleware';
import { userSchema } from '#schemas';

const userRoutes = Router();

userRoutes.route('/').get(getUsers).post(validateBody(userSchema), createUser);
userRoutes
  .route('/:id')
  .get(getUserById)
  .put(fileUploadHandler, validateBody(userSchema), updateUser)
  .delete(deleteUser);

export default userRoutes;
