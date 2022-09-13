export const ERROR_CODES = {
  valueObject: {
    /** Identity */
    identity: {
      empty: {
        code: 'VO_IDENTITY_0001',
        message: 'Id cannot be an empty value',
      },
    },

    /** Name */
    name: {
      empty: {
        code: 'VO_NAME_0001',
        message: 'FirstName or LastName cannot be an empty value',
      },
    },

    /** Role */
    role: {
      update: {
        code: 'VO_ROLE_0001',
        message: 'Role is an imutable value',
      },
    },

    /** Phone */
    phone: {
      empty: {
        code: 'VO_PHONE_0001',
        message: 'Phone cannot be an empty value',
      },
      invalid: {
        code: 'VO_PHONE_0002',
        message: 'Phone is invalid',
      },
    },

    /** Email */
    email: {
      empty: {
        code: 'VO_EMAIL_0001',
        message: 'Email cannot be an empty value',
      },
      invalid: {
        code: 'VO_EMAIL_0002',
        message: 'Email is invalid',
      },
    },

    /** Password */
    password: {
      empty: {
        code: 'VO_PASSWORD_0001',
        message: 'Passowrd cannot be an empty value',
      },
    },

    /** Non Mutable Date */
    nonMutableDate: {
      update: {
        code: 'VO_NON_MUTABLE_DATE_0001',
        message: 'This date is not controlled',
      },
    },

    /** BirthDate */
    birthDate: {
      invalid: {
        code: 'VO_BIRTHDATE_0001',
        message: 'Invalid birthdate',
      },
    },

    /** Document ID */
    documentId: {
      empty: {
        code: 'VO_DOCUMENT_ID_0001',
        message: 'Document ID cannot be empty',
      },
    },

    /** User State */
    userStatus: {
      changeAdminState: {
        code: 'VO_USER_STATUS_0001',
        message: 'Admin users cannot be blocked',
      },
    },
  },
  businessRule: {
    /** User state */
    userStatus: {
      changeByValueObject: {
        code: 'BR_USER_STATUS_0001',
        message:
          'Cannot change user state by the Value Object, you need to do it by User Aggregation by changeUserStatus method',
      },
    },
  },
};
