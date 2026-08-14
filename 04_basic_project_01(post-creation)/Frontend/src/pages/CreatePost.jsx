import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>

      <h1>Create Post</h1>

      <input type="file" name='image' accept='image/*' />
      <input type="text" name='caption' placeholder='Enter Caption' required />
      <button type='submit'>Submit</button>

    </section>
  )
}

export default CreatePost