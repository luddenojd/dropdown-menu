import styled from "styled-components"

export const DarkDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  width: 400px;
  background: #111111;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  font-size: 22px;
  &:hover {
    filter: drop-shadow(0 0 0.5rem #7a7a7a);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const GreenDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  width: 400px;
  background: #4f772d;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  font-size: 22px;
  &:hover {
    filter: drop-shadow(0 0 0.5rem #132a13);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const HalloweenDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  width: 400px;
  background: #eb5e28;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  font-size: 22px;
  &:hover {
    filter: drop-shadow(0 0 0.5rem #252422);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const CandyDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  width: 400px;
  background: #e06c96;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  font-size: 22px;
  &:hover {
    filter: drop-shadow(0 0 0.5rem #6296c6);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const GreenBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 750px;
  background: #31572c;
`
export const DarkBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 750px;
  background: #000000;
`
export const HalloweenBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 750px;
  background: #403d39;
`
export const CandyBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 750px;
  background: #cdb4db;
`
export const GreenDropMenu = styled.div`
  height: 200px;
  width: 440px;
  background: #90a955;
  border-radius: 10px;
  position: absolute;
  &:hover {
    filter: drop-shadow(0 0 0.1rem #ecf39e);
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`
export const DarkDropMenu = styled.div`
  height: 200px;
  width: 440px;
  background: #232323;
  border-radius: 10px;
  position: absolute;
  &:hover {
    filter: drop-shadow(0 0 0.1rem #7a7a7a);
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`
export const HalloweenDropMenu = styled.div`
  height: 200px;
  width: 440px;
  background: #252422;
  border-radius: 10px;
  position: absolute;
  &:hover {
    filter: drop-shadow(0 0 0.1rem #ccc5b9);
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`
export const CandyDropMenu = styled.div`
  height: 200px;
  width: 440px;
  background: #a2d2ff;
  border-radius: 10px;
  position: absolute;
  &:hover {
    filter: drop-shadow(0 0 0.1rem #6296c6);
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`
export const GreenListItem = styled.div`
  color: #132a13;
  &:hover {
    color: white;
    background: #4f772d;
    border-radius: 10px;
  }
`
export const DarkListItem = styled.div`
  color: white;
  &:hover {
    background: #111111;
    border-radius: 10px;
  }
`
export const HalloweenListItem = styled.div`
  color: white;
  &:hover {
    color: #252422;
    background: #ccc5b9;
    border-radius: 10px;
  }
`
export const CandyListItem = styled.div`
  color: #252422;
  &:hover {
    color: white;
    background: #e06c96;
    border-radius: 10px;
  }
`
