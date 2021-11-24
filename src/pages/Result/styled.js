import styled from 'styled-components';
import * as colors from '../../config/colors';

export const MyP = styled.p`
  color: ${colors.ceruleanCrayola};
  margin: 15px 0;
  font-size: 15px;
  font-weight: 700;
`;

export const MySpan = styled.span`
  color: ${colors.ceruleanCrayola};
  margin: 15px 0;
  font-size: 15px;
  font-weight: 700;
`;

export const Title = styled.h1`
  color: ${colors.ceruleanCrayola};
  font-size: 40px;
  small {
    font-size: 25pt;
    margin-left: 10px;
    color: ${colors.ligthGreen};
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 90%;
  border: 1px solid ${colors.aquamarine};
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Bigger = styled.h1`
  font-size: 12pt;
  font-weight: bold;
  font-style: italic;
  color: ${colors.midnightGreen};
`;
