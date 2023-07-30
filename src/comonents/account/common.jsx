import styled from "styled-components";

export const BoxContainer=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const FormContainer=styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 150px 25px 150px;//top right bottom left
`;

export const MutedLink=styled.a`
   font-size : 12px;
   color: rgba(200,200,200,0.8);
   font-weight: 500;
   text-decoration: none;
   padding-top: 1em;
   font-size: medium;
`;

export const BoldLink=styled.a`
   font-size : 12px;
   color: #b1ae1e;;
   font-weight: 500;
   text-decoration: none; 
   font-size: medium;
`;

export const Input=styled.input`
  width  : 100%;
  height: 42px;
  outline:none;
  border: 1px solid #04fa2566;
  padding: 0px 10px;
  border-bottom: 1.4px solid #04fa2566;
  font-size: large;

&:placeholder/*short hint*/{
    color: #6fca33;
}

&:not(:last-of-type)/*not matches every element that is NOT the 
specified element/selector
last-of-type*/{
border-bottom:1.5px solid #fc4ec266 ;
}

&:focus/*select the element that has focus*/{
    outline:none;
    border-bottom:2px solid #0d11f566 ;
}
`;
export const SubmitButton =styled.button`
  width  : 80%;
  padding: 11px 30%;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transform: all, 240ms ease-in-out;
  background: #2ecc71;
background: linear-gradient(58deg, #f1c40f 0%,#16a085 35%, #2ecc71 100%);
padding-top: 2em;

&.hover{
    filter:brightness(1.03);
}
`;





