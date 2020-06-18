/**
 * @api {get} classes/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id} Danh sách lớp
 * @apiName List Classes
 * @apiDescription Lấy danh sách lớp theo quyền của người dùng.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/classes/users/1/teachers/1/academicyears/1/appliedlevels/2
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID User.
 * @apiParam (Parameter) {Int} teacher_id ID Teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic Year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied Level.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin.
 * @apiSuccess {Boolean} data.is_view_all True được xem toàn trường. False: Không được xem toàn trường.
 * @apiSuccess {Array} data.educations Danh sách khối lớp.
 * @apiSuccess {String} data.educations.name Tên khối lớp.
 * @apiSuccess {Array} data.educations.classes Danh sách lớp.
 * @apiSuccess {Int} data.educations.classes.class_id ID lớp.
 * @apiSuccess {String} data.educations.classes.class_name Tên lớp.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 OK
 * {
 * "success" : true,
 * "data" : {
 *      "is_view_all": false,
 *      "educations": [
 *         {
 *              "education_name": "Khối 6",
 *              "classes": [
 *                  {
 *                      "class_id": 1247,
 *                      "class_name": "6A1"
 *                  },
 *                  {
 *                      "class_id": 1874,
 *                      "class_name": "6A2"
 *                  }
 *              ]
 *          },
 *          {
 *              "education_name": "Khối 7",
 *              "classes": [
 *                  {
 *                      "class_id": 15874,
 *                      "class_name": "7A1"
 *                  },
 *                  {
 *                      "class_id": 1547,
 *                      "class_name": "7A2"
 *                  }
 *              ]
 *          }
 *      ]
 *  }
 * }
 *
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

 /**
 * @api {get} time-type/users/{user_id}/academicyears/{academic_year_id} Loại thống kê
 * @apiName GetTypeData
 * @apiDescription Lấy loại thống kê và thời gian thống kê
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/time-type/users/1/teachers/1/academicyears/1/semester/1
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID User.
 * @apiParam (Parameter) {Int} teacher_id ID Teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic Year.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin.
 * @apiSuccess {Boolean} data.is_view_all True được xem toàn trường. False: Không được xem toàn trường.
 * @apiSuccess {Array} data.educations Danh sách khối lớp.
 * @apiSuccess {String} data.educations.name Tên khối lớp.
 * @apiSuccess {Array} data.educations.classes Danh sách lớp.
 * @apiSuccess {Int} data.educations.classes.class_id ID lớp.
 * @apiSuccess {String} data.educations.classes.class_name Tên lớp.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 OK
 * {
 * "success" : true,
 * "data" : {
 *      "types": [
 *         {
 *              "type_key": 1,
 *              "type_name": "Thống kê theo tuần",
 *              "type_data": [
 *                  {
 *                      "from": "09-12-2019",
 *                      "to": "13-12-2019"
 *                  },
 *                  {
 *                      "from": "09-12-2019",
 *                      "to": "13-12-2019"
 *                  }
 *              ]
 *          },
 *          {
 *              "type_key": 2,
 *              "type_name": "Thống kê theo ngày",
 *              "type_data": [
 *                  {
 *                      "time": "09-12-2019",
 *                  },
 *                  {
 *                      "time": "12-12-2019",
 *                  }
 *              ]
 *          }
 *      ]
 *  }
 * }
 *
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */


/**
 * @api {get} /statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/date/{date} Thống kê điểm danh theo ngày
 * @apiName Attendance Statistics by Date
 * @apiDescription Lấy thông tin thống kê điểm danh theo ngày
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/date/20-10-2019
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied level.
 * @apiParam (Parameter) {Int} class_id ID class.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 * @apiParam (Parameter) {String} date Date.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin thông kê.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 * 
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 *  
 */

/**
 * @api {get} /statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/from/{from_date}/to/{to_date} Thống kê điểm danh theo tuần
 * @apiName Attendance Statistics by Week
 * @apiDescription Lấy thông tin thống kê điểm danh theo tuần
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/from/20-10-2019/to/25-10-2019
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied level.
 * @apiParam (Parameter) {Int} class_id ID class.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 * @apiParam (Parameter) {String} from_date Date Start of ưeek.
 * @apiParam (Parameter) {String} to_date Date End of week.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin thông kê.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 * 
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 *  
 */