using System;
using ADACA.Application;
using ADACA.Domain;
using ADACA.Dto;
using Microsoft.EntityFrameworkCore;

namespace ADACA.Infrastructure
{
    public class PersonalInfoRepository : IPersonalInfoRepository
    {
        private readonly PersonalContext _personalContext;

        public PersonalInfoRepository(PersonalContext personalContext)
        {
            _personalContext = personalContext;
        }
        public async Task<bool> addPersonalInfor(PersonalInformation personalInformation)
        {
            _personalContext.PersonalInformations.Add(personalInformation);
            var result = await _personalContext.SaveChangesAsync();
            return result > 0;
        }

        public async Task<bool> deletePersonalInfor(int id)
        {
            var personalInfo = _personalContext.PersonalInformations.Where(p =>  p.id== id).First();
            _personalContext.PersonalInformations.Remove(personalInfo);

            return await _personalContext.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<PersonalInformation>> getAllPersonalInfo(int take, int skip)
        {
            return await _personalContext.PersonalInformations.OrderBy(p => p.id).Skip(skip).Take(take).ToListAsync();
        }

        public async Task<PersonalInformation> getAllPersonalInfoById(int id)
        {
            return await _personalContext.PersonalInformations.Where(p => p.id == id).SingleOrDefaultAsync();
        }

        public async Task<bool> updatePersonalInfor(PersonalInformationDto personalInformationDto)
        {
            PersonalInformation personalInformation = await _personalContext.PersonalInformations.Where(p => p.id == personalInformationDto.id).SingleOrDefaultAsync();

            if (personalInformation != null)
            {
                personalInformation.firstName = personalInformationDto.firstName;
                personalInformation.lastName = personalInformationDto.lastName;
                personalInformation.emailAddress = personalInformationDto.emailAddress;
                personalInformation.phoneNumber = personalInformationDto.phoneNumber;
            }
            return await _personalContext.SaveChangesAsync() > 0;
        }
    }
}

