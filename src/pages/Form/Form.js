import './Form.css';
import React from 'react';
import emailjs from "emailjs-com"
//import axios from "axios";
import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Button,
    Box,
    Textarea
  } from '@chakra-ui/react';
  

const Form = () => {
  const [input,setInput]=React.useState(true);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
	    Number: "",
		Body:""
	  });
    
    function handleChangeForm(event) {
      const { name, value } = event.target;
      setInput(true);
      setForm((prevNote) => {
        return {
        ...prevNote,
        [name]: value
        };
      });
      };
      const submitNoteForm =async (event)=> {
        event.preventDefault();
        console.log(event.target);
        if (form.Name === "" || form.Email === "" || form.Number === 0 || form.Body === "")
        {
          setInput(false);
        }
        else{
            console.log(form);
            //axios.post("http://localhost:8080/form", form);
            emailjs.sendForm("service_adr03va","template_1scw4dp",event.target,"PvTh2g-GgAfPvNvK_").then(res=>{console.log(res);}).catch(err=> console.log(err));
            window.location.reload();
            setForm({Name: "",
            Email: "",
              Number: "",
            Body:""});

        }
         };
         
  return (
    
    <div className='form-container1'>
        <form className='form-stack' onSubmit={submitNoteForm}>
            <div className='spacebb'></div>
            <div className='spacebb'></div>
                {(input===true)?<></> : <div className='errorr'>* Fill all fields</div>}
                
                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Name</FormLabel>
                    </div>
                    <div className='form-right'>
                      <Input placeholder='Enter your name' name="Name" value={form.Name} onChange={handleChangeForm} required />
                    </div>
                </div>

                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Email address</FormLabel>
                    </div>
                    <div className='form-right'>
                      <Input type='email' placeholder="Enter your email" name="Email" value={form.Email} onChange={handleChangeForm} required />
                    </div>
                </div>


                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Whatsapp Number</FormLabel>
                    </div>
                    <div className='form-right'>
                        <NumberInput max={9999999999} placeholder='Enter your Number' min={1111111111} value={form.Number} required>
                              <NumberInputField placeholder='Enter your Number' name="Number"  onChange={handleChangeForm} />
                        </NumberInput>
                    </div>
                </div>

                <div className='form-total2'>
                  <div className='form-left'>
                    <FormLabel className="space">Message </FormLabel>
                  </div>
                  <div className='form-right'>
{/*                     
                  <Box display='flex' className='bordel' as='button' borderRadius='lg' borderWidth='2px' px={4} h={30}> */}
                  <Textarea placeholder='Write the message...' name="Body"
                    onChange={handleChangeForm}
                    value={form.Body} />
                  
                    {/* </Box> */}
                  </div>
                </div>

                
                <div className='spacebb'></div>
                <div className='form-totalb'>
                  <div className='form-submi'>
                    <Button type="submit" className='form-buttonf' colorScheme='red'><div className='form-subm'>Submit</div></Button>
                  </div>
                </div>
        
          </form> 
        </div>
        //  onClick={submitNoteForm}
  )
}





export default Form;