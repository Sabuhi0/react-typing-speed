import React, { Component } from 'react'

class SpeedCheck extends React.Component {
  state = {}
  render() {
    return (
      <>
        <div className='container-typing mx-auto'>
          <div className='w-full border text-center rounded mt-5'>
            <div className='bg-[#00000008] py-4 border-b border-[#00000020]'>
              <h1 className='text-4xl text-[#090c18]'>Yazma sürət testi</h1>
            </div>
            <div className='text-[15px] flex flex-col gap-2 my-5'>
              <p>Aşağıdakı mətni qutuya daxil etməyə başlayanda vaxtınız başlayacaq.</p>
              <p>Testi bitirmək üçün <span>'Ctrl' + 'Enter'</span> kombinasiyadan istifadə edin.</p>
              <p>Həmçinin, simvol limitini aşdığınız zaman test avtomatik olaraq bitəcək.</p>
            </div>
            <div className='bg-[#00000008] py-4 border-t border-[#00000020]'>
              <h1 className='text-2xl text-[#020305]'>Hello React</h1>
            </div>
          </div>
        </div>
      </>
    
    )
  }
}

export default SpeedCheck;