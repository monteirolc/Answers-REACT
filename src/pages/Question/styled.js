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

export const Line = styled.div`
  width: 90%;
  border: 1px solid ${colors.aquamarine};
  margin-top: 10px;
  margin-bottom: 20px;
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

export const QuestionContainer = styled.div`
  margin-top: 20px;
  color: ${colors.persianGreen};
  h3 {
    margin-top: 5px;
    font-size: 16px;
    margin-bottom: 24px;
  }
  p {
    font-size: 12px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 0;
  }

  div + div {
    border-top: 1px solid ${colors.aquamarine};
  }
`;

export const InvLabel = styled.div`
  visibility: hidden;
  display: none;
  color: ${colors.ceruleanCrayola};
  font-weight: bolder;
`;
