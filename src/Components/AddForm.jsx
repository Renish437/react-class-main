import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

const AddForm = () => {
  return (
    <div className='p-5 max-w-[460px] '>
        <Typography variant='h3' className='mb-3'>Add a Post</Typography>
<Formik

initialValues={{
  title:'',
  textHere:' ',
  plang:"",
  country:"",
  hobbies:""
 
}}
onSubmit={(val)=>{
console.log(val);
}}
>
    {({values,handleChange,handleSubmit,setFieldValue,errors})=>{
    
      
        return <form onSubmit={handleSubmit}  action="" className='space-y-3' >
            <div>
            <Input value={values.title}  onChange={handleChange} label='Title'  name='title'/>
            </div>


            <div>
              <Textarea value={values.textHere} onChange={handleChange} name='textHere'   label='TextHere'></Textarea>
            </div>

<div className='flex gap-3'>
  <Radio label="HTML" name='plang' onChange={handleChange} value={'HTML'}/>
  <Radio label="CSS" name='plang' onChange={handleChange} value={'CSS'}/>
  <Radio label="JS" name='plang' onChange={handleChange} value={'JS'}/>
</div>

            <div className='w-72'>
              <Select name='country' label='Country' onChange={(e)=>setFieldValue('country',e)} >
                <Option   value='Nepal'>Nepal</Option>
                <Option  value='UK'>UK</Option>
                <Option  value='France'>France</Option>
              </Select>
            </div>

<div className='flex gap-5'>
  <Checkbox value="Read" label="Read" onChange={handleChange} name="hobbies"/>
  <Checkbox value="Write" label="Write" onChange={handleChange} name="hobbies"/>
  <Checkbox value="Sings" label="Sing" onChange={handleChange} name="hobbies"/>
</div>

            <Button type='submit' className='py-3'>Submit</Button>
            
        </form>
    }}
</Formik>



    </div>
  )
}

export default AddForm