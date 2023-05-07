using System;
using ADACA.Domain;
using ADACA.Dto;
using AutoMapper;

namespace ADACA.Api
{
	public class AutomapperConfig : Profile

	{
		public AutomapperConfig()
		{
			CreateMap<PersonalInformationDto, PersonalInformation>().ReverseMap();
        }
	}
}

