using System;
using AutoMapper;
using ADACA.Application;
using ADACA.Domain;
using ADACA.Dto;
using Microsoft.AspNetCore.Mvc;

namespace ITX.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonalInformationController : ControllerBase
    {
        private readonly IPersonalInforService _service;
        private readonly IMapper _mapper;
        public PersonalInformationController(IPersonalInforService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PersonalInformation>> getAllPersonalInfomation(int take = 20, int skip = 0)
        {
            var personalInfpos = await _service.getAllPersonalInfo(take, skip);
            return Ok(personalInfpos);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PersonalInformation>> getPersonalInfomationById(int id)
        {
            var personalInfpos = await _service.getPersonalInfoById(id);
            return Ok(personalInfpos);
        }

        [HttpPost]
        public async Task<ActionResult<bool>> addPersonalInfo(PersonalInformationDto personalInformationDto)
        {
            PersonalInformation personalInformation = _mapper.Map<PersonalInformation>(personalInformationDto);

            var result = await _service.addPersonalInfor(personalInformation);
            return  Ok(result);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<bool>> updatePersonalInfo(int id, PersonalInformationDto personalInformationDto)
        {
            //PersonalInformation personalInformation = _mapper.Map<PersonalInformation>(personalInformationDto);

            var result = await _service.updatePersonalInfor(id, personalInformationDto);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult<bool>> deletePersonalInfo(int id)
        {
            var isDelete = await _service.deletePersonalInfor(id);
            return Ok(isDelete);
        }
    }
}

