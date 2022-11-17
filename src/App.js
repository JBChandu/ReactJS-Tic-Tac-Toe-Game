import React, { useState } from 'react';

import Icon from "./components/Icon"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import {Card,CardBody,Container,Button,Row,Col} from "reactstrap"
import 'animate.css';
import './App.css';


const itemArray=new Array(9).fill("empty");

const App=()=> {

  
  const [isCross, setIsCross] = useState(false);
  const [WinMessage,setWinMessage] = useState("");

  const reload=()=>{
    // 
    setIsCross(false)
    setWinMessage("");
    itemArray.fill("empty",0,9);
  }
  const checkWinner=()=>{
    // 
    if(itemArray[0]===itemArray[1] && itemArray[1]===itemArray[2] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[3]===itemArray[4] && itemArray[4]===itemArray[5] && itemArray[3]!=="empty"){
      setWinMessage(`${itemArray[3]} wins`)
    }else if(itemArray[6]===itemArray[7] && itemArray[7]===itemArray[8] && itemArray[6]!=="empty"){
      setWinMessage(`${itemArray[6]} wins`)
    }else if(itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7] && itemArray[1]!=="empty"){
      setWinMessage(`${itemArray[1]} wins`)
    }else if(itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }else if(itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }else if(
    itemArray[0]!=="empty"&&itemArray[1]!=="empty"&&itemArray[2]!=="empty"&&itemArray[3]!=="empty"
    &&itemArray[4]!=="empty"&&itemArray[5]!=="empty"
    &&itemArray[6]!=="empty"&&itemArray[7]!=="empty"&&itemArray[8]!=="empty"){
      setWinMessage("Game Tied");
    }
  }
  const changeItem=(itemNumber)=>{
    // 
    if(WinMessage){
      return toast(WinMessage,{type:'success'});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross?"cross":"circle";
      setIsCross(!isCross);
    }else{
      return toast("Already filled",{type:"error"})
    }

    checkWinner();
  }


  return (
    <Container className='p-5'>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row >
        <Col md={6} className="offset-md-3">
        {WinMessage?(
            <div className='mb-2 mt-2 pb-4'>
              <h1 className='mb-2 pb-2 alert alert-info text-success text-center text-uppercase animate__animated animate__zoomInDown animate__delay-0.1s'>{WinMessage}</h1>
              <Button  color="success" block onClick={reload}>Play Again!</Button>
            </div>
            
          ):(
            <h1 className='text-light text-center'>
              {isCross?"CROSS":"CIRCLE" }'s turn
            </h1>
          )}    
          <div className="grid">
            {itemArray.map((item,index)=>(
              <Card className="animate__animated animate__jackInTheBox animate__delay-1s " style={{background:"#62FFE5"}} onClick={()=>{changeItem(index)}} >
                <CardBody className="box">
                  <Icon  name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>

         
        </Col>
      </Row>

    </Container>
  
  );
}

export default App;
