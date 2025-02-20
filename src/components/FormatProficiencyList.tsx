export const formatProficiency = (proficiency: string) => {
  if (proficiency === 'The Ohio State University Full-Stack Development Bootcamp Certification (In progress until May 2025)') {
    return (
      <>
        The Ohio State University
        <br />
        Full-Stack Development
        <br />
        Bootcamp Certification
        <br />
        (In progress until
        <br />
        May 2025)
      </>
    );
  }

  const words = proficiency.split(' ');
  if (words.length > 2) {
    return (
      <>
        {words.slice(0, 2).join(' ')}
        <br />
        {words.slice(2, 4).join(' ')}
        <br />
        {words.slice(4).join(' ')}
      </>
    );
  }
  return proficiency;
};