import styled from "styled-components";

export const StyledMarker = styled.span`
 background-color: yellow;
 font-weight: bolder;
 border-radius: 2px;
`;

export const StyledItem = styled.a`
 color: black;
 display: block;
 padding: 10px;
 text-decoration: none;
 &:hover{
  background-color: #4c91ba;
  color: white;
 }

 &:hover span{
  color: black;
 }
`;