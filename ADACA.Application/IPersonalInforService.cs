using System;
using ADACA.Domain;
using ADACA.Dto;

namespace ADACA.Application
{
	public interface IPersonalInforService
	{
        Task<IEnumerable<PersonalInformation>> getAllPersonalInfo(int take, int skip);
        Task<PersonalInformation> getPersonalInfoById(int id);
        Task<bool> addPersonalInfor(PersonalInformation personalInformation);
        Task<bool> updatePersonalInfor(int id, PersonalInformationDto personalInformation);
        Task<bool> deletePersonalInfor(int id);

    }
}

