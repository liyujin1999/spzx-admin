import request from '@/utils/request'

// 分页查询角色数据
export const GetSysRoleListByPage = (current,limit,queryDto) => {
    return request({
        url: `/admin/system/sysRole/findByPage/${current}/${limit}`,
        method: 'post',
        data: queryDto,
    })
}

// 添加角色请求方法
export const SaveSysRole = (sysRole) => {
    return request({
        url: '/admin/system/sysRole/saveSysRole',
        method: 'post',
        data: sysRole,
    })
}

// 添加修改
export const UpdateSysRole = (sysRole) => {
    return request({
        url: '/admin/system/sysRole/updateSysRole',
        method: 'put',
        data: sysRole,
    })
}

// 删除角色
export const DeleteSysRoleById = (roleId) => {
    return request({
        url: `/admin/system/sysRole/deleteById/${roleId}`,
        method: 'delete'
    })
}