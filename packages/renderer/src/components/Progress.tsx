import React from 'react'
import styled, { keyframes } from 'styled-components'
import { brandPrimary } from '../styles/variables'

const IndeterminateBox = styled.div`
  height: 2px;
  position: relative;
  display: block;
  width: 100%;
  background-color: #ccc;
  background-clip: padding-box;
  overflow: hidden;
`

const webkitIndeterminate = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const indeterminate = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const webkitIndeterminateShort = keyframes`
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
`

const indeterminateShort = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`

const Indeterminate = styled.div`
  background-color: ${brandPrimary};

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
  }

  &:before {
    -webkit-animation: ${webkitIndeterminate} 2.1s
      cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
  }

  &:after {
    -webkit-animation: ${webkitIndeterminateShort} 2.1s
      cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: ${indeterminateShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
      infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
  }
`

export const Progress: React.FC = () => (
  <IndeterminateBox>
    <Indeterminate />
  </IndeterminateBox>
)
