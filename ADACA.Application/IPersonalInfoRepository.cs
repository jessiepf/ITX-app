using System;
using ADACA.Domain;
using ADACA.Dto;

namespace ADACA.Application
{
	public interface IPersonalInfoRepository
	{
        Task<IEnumerable<PersonalInformation>> getAllPersonalInfo(int take, int skip);
        Task<PersonalInformation> getAllPersonalInfoById(int id);
        Task<bool> addPersonalInfor(PersonalInformation personalInformation);
        Task<bool> updatePersonalInfor(PersonalInformationDto personalInformation);
        Task<bool> deletePersonalInfor(int id);
    }
}

