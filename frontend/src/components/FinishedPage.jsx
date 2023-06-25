import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
const FinishedPage = () => {
  return (
    <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='90vh'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Thank You For Assessment
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your Interview Assessment.
  </AlertDescription>
</Alert>
  )
}

export default FinishedPage
