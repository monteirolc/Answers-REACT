import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  color: ${colors.ceruleanCrayola};
  font-size: 40px;
  small {
    font-size: 25pt;
    margin-left: 10px;
    color: ${colors.ligthGreen};
  }
`;

export const MyP = styled.p`
  color: ${colors.ceruleanCrayola};
  margin: 15px 0;
  font-size: 15px;
  font-weight: 700;
`;

export const MyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
