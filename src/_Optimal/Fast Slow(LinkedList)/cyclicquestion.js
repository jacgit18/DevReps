// Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1? 
// (eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)


function areRotations( str1,  str2)
{
    // There lengths must be same and str2 must be
    // a substring of str1 concatenated with str1. 
    return (str1.length == str2.length) &&
           ((str1 + str1).indexOf(str2) != -1);
}
 
// Driver method

    var str1 = "AACD";
    var str2 = "ACDA";

    if (areRotations(str1, str2))
        document.write("Strings are rotations of each other");
    else
        document.write("Strings are not rotations of each other");