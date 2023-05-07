using System;
using ADACA.Domain;
using ADACA.Dto;

namespace ADACA.Application
{
    public class PersonalInforService : IPersonalInforService
    {
        private readonly IPersonalInfoRepository _personalInfoRepository;

        public PersonalInforService(IPersonalInfoRepository personalInfoRepository)
        {
            _personalInfoRepository = personalInfoRepository;
        }

        public async Task<bool> addPersonalInfor(PersonalInformation personalInformation)
        {
            return await _personalInfoRepository.addPersonalInfor(personalInformation);
        }

        public async Task<bool> deletePersonalInfor(int id)
        {
            return await _personalInfoRepository.deletePersonalInfor(id);
        }

        public async Task<IEnumerable<PersonalInformation>> getAllPersonalInfo(int take, int skip)
        {
            return await _personalInfoRepository.getAllPersonalInfo(take, skip);
        }

        public Task<PersonalInformation> getAllPersonalInfoById(int id)
        {
            return _personalInfoRepository.getAllPersonalInfoById(id);
        }

        public Task<bool> updatePersonalInfor(PersonalInformationDto personalInformation)
        {
            return _personalInfoRepository.updatePersonalInfor(personalInformation);
        }
    }
}

