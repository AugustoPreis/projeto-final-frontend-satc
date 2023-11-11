import React from 'react';
import { Tag } from 'antd';

export function formatStatusManutencao(status, tag) {
  let props = {};

  switch (status) {
    case '1':
      props = { descricao: 'Em aguardo', color: 'orange' };
      break;
    case '2':
      props = { descricao: 'Em andamento', color: 'blue' };
      break;
    case '3':
      props = { descricao: 'Finalizada', color: 'green' };
      break;
    default:
      return '';
  }

  if (!tag) {
    return props.descricao;
  }

  return (
    <Tag color={props.color}>
      {props.descricao}
    </Tag>
  );
}