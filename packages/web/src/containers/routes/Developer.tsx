import React from 'react';
import { Developer } from '../pages';
import { AuthMiddleware, RoleMiddleware } from './middlewares';

interface IDeveloper {
  path: string;
}

const DeveloperRouter: React.FC<IDeveloper> = (props) => {
  return (
    <AuthMiddleware redirect={props.path}>
      <RoleMiddleware role="Anderson Bolivar">
        <Developer />
      </RoleMiddleware>
    </AuthMiddleware>
  );
};

export default DeveloperRouter;

// não carregar o arquivo inteiro em memória
// reprocessamento caso um dos arquivos venham dar errado
