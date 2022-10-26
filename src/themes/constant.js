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
export const GreenDropMenu = styled.div`
  height: 200px;
  width: 440px;
  background: #90a955;
  border-radius: 10px;
  position: absolute;
  &:hover {
    filter: drop-shadow(0 0 0.1rem #ecf39e);
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
