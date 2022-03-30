
import { Formik, Field, Form } from 'formik';
import emailjs from '@emailjs/browser';
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BiText} from 'react-icons/bi'

export function ContactMe(){
   

 


      return (
      <div className='contact-me-content'>
          <h1>Contact Me</h1>
          <div className="line-sep"></div>
          <div className='email-form'>
          <Formik 
          
              initialValues={{
                    fullname:'',
                    email:'',
                    message:''
              }}
              onSubmit={async (values) => {
                try{
                  await emailjs.send('service_dkrm8y6', 'template_nmo1udt', values, 'user_qiBVKJIeL6JHJFMRNHQOw');
                
                   values.fullname=''
                   values.email=''
                   values.message=''
                }
                catch(err) {
                  console.log('Had error on email:', err);
              }
              }}
          >
              <Form   autoComplete="off">
                  <label><BsFillPersonFill/>
                  <Field
                      as="input"
                      id="fullname"
                      name="fullname"
                      type="text"
                      label="fullname"
                      placeholder="Fullname*"
                      autoComplete="off"
                      required
                    
                  /></label>

<label><MdEmail/><Field
                     as="input"
                      id="email"
                      name="email"
                      type="email"
                      label="email"
                      placeholder="Email*"
                      autoComplete="off"
                      required
                  /></label>
                  <label><BiText/> <Field
                    className="email-from-textarea"
                      as="textarea"
                      id="message"
                      name="message"
                      type="text"
                      label="message"
                      autoComplete="off"
                      placeholder="Write Here :)"
                      required
                  /></label>
                      <button
                      type="submit"
                      // fullWidth
    
                  >
                      Send
                  </button>

                         </Form>
                 </Formik>
          </div>
       
      </div>
      )

}

