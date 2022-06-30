// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/:resource',(req, res)=>{
  const resource = req.params.resource
  const controller = controllers[resource]
  const filters = req.query

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }
  controller.get(filters)
  .then(data=>{
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message: err.message
    })
  })
})

router.get('/:resource/:id', (req, res)=>{
  const resource = req.params.resource
  const id = req.params.id
  const controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  controller.getById(id)
  .then(data=>{
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err=>{
    res.json({
      confirmation: 'fail',
      message: err.message
    })
  })

})

//POST - create new records:
router.post('/:resource', (req, res)=>{
  const resource = req.params.resource
  const controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  controller.post(req.body)
  .then(data=>{
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err=>{
    res.json({
      confirmation: 'fail',
      message: err.message
    })
  })
})

//PUT
router.put('/:resource/:id',(req, res)=>{
  const resource = req.params.resource
  const controller = controllers[resource]
  const id = req.params.id
  const body = req.body

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }
  controller.put(id, body)
  .then(data=>{
    console.log("id: " + id)
    console.log("body: " + body)
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err.message
    })
  })
})

//DELETE
router.delete('/:resource/:id',(req, res)=>{
  const resource = req.params.resource
  const controller = controllers[resource]
  const id = req.params.id
  if(controller == null){
    res.json({
      confirmation:'fail',
      message: 'Invalida resource'
    })
    return
  }
  controller.delete(id)
  .then(data=>{
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err=>{
    res.json({
      confirmation: 'fail',
      message: err.message
    })
  })
})

module.exports = router
